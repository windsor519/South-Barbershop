document.addEventListener('DOMContentLoaded', function() {
    const bookAppointmentButton = document.getElementById('book-appointment');
    const appointmentForm = document.getElementById('appointment-form');
    const closeFormButton = document.getElementById('close-form');

    bookAppointmentButton.addEventListener('click', function() {
        appointmentForm.style.display = 'block';
    });

    closeFormButton.addEventListener('click', function() {
        appointmentForm.style.display = 'none';
    });

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(appointmentForm);
        const data = {
            name: formData.get('name'),
            date: formData.get('date'),
            time: formData.get('time'),
        };

        console.log('Appointment booked:', data);
        appointmentForm.reset();
        appointmentForm.style.display = 'none';
        alert('Your appointment has been booked!');
    });
});