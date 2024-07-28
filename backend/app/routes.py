from flask import request, jsonify
from . import db
from .models import Retreat, Booking
from . import create_app

app = create_app()

@app.route('/retreats', methods=['GET'])
def get_retreats():
    filters = request.args
    query = Retreat.query

    if 'search' in filters:
        query = query.filter(Retreat.title.ilike(f"%{filters['search']}%"))
    if 'date' in filters:
        query = query.filter(Retreat.date == filters['date'])
    if 'type' in filters:
        query = query.filter(Retreat.description.ilike(f"%{filters['type']}%"))

    page = filters.get('page', 1, type=int)
    limit = filters.get('limit', 10, type=int)
    retreats = query.paginate(page, limit, False).items
    return jsonify([{
        'id': retreat.id,
        'title': retreat.title,
        'description': retreat.description,
        'image': retreat.image,
        'date': retreat.date,
        'location': retreat.location,
        'price': retreat.price
    } for retreat in retreats])

@app.route('/book', methods=['POST'])
def book_retreat():
    data = request.json
    booking = Booking(
        user_id=data['user_id'],
        user_name=data['user_name'],
        user_email=data['user_email'],
        user_phone=data['user_phone'],
        retreat_id=data['retreat_id'],
        retreat_title=data['retreat_title'],
        retreat_location=data['retreat_location'],
        retreat_price=data['retreat_price'],
        retreat_duration=data['retreat_duration'],
        payment_details=data['payment_details'],
        booking_date=data['booking_date']
    )

    existing_booking = Booking.query.filter_by(
        user_id=data['user_id'],
        retreat_id=data['retreat_id']
    ).first()

    if existing_booking:
        return jsonify({'message': 'Retreat already booked'}), 400

    db.session.add(booking)
    db.session.commit()
    return jsonify({'message': 'Booking successful'}), 201
