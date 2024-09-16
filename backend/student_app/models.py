from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Student(models.Model):
    student_id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=80)
    age = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(120)])
    address = models.TextField()
    grade = models.CharField(max_length=10)
    major = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name}, {self.last_name}"
