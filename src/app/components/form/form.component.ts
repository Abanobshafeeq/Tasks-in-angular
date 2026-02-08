import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProfileComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  step = 1;
  photoPreview: string | null = null;
  idProofPreview: string | null = null;
  form: FormGroup;
  submittedData: any = null;

  constructor(
    private fb: FormBuilder,
    private userDataService: UserDataService,
    private router: Router 
  ) {
    // Initialize empty form
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      constituency: ['', Validators.required],
      party: ['', Validators.required],
      position: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['male', Validators.required],
      vision: ['', [Validators.required, Validators.minLength(20)]],
      education: this.fb.array([]), 
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      facebook: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      idType: ['National ID', Validators.required],
      agreeTerms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    let isEditMode = false;

    if (typeof history !== 'undefined' && history.state) {
      isEditMode = history.state.isEdit;
    }

    if (isEditMode) {
      this.userDataService.userData$.subscribe((data) => {
        if (data) {
          this.form.patchValue(data);

          if (data.education && Array.isArray(data.education)) {
            this.fillEducationArray(data.education);
          } else {
            if (this.education.length === 0) this.addEducation();
          }

          this.photoPreview = data.photo || null;
          this.idProofPreview = data.idProof || null;

          this.submittedData = null;
        }
      });
    } else {
      if (this.education.length === 0) this.addEducation();
      this.submittedData = null;
    }
  }

  fillEducationArray(educationData: any[]) {
    const educationControl = this.form.get('education') as FormArray;
    educationControl.clear(); 

    educationData.forEach((edu) => {
      educationControl.push(
        this.fb.group({
          degree: [edu.degree, Validators.required],
          college: [edu.college, Validators.required],
          year: [edu.year, Validators.required],
        })
      );
    });
  }

  // --- Form Getters & Helpers ---
  get education(): FormArray {
    return this.form.get('education') as FormArray;
  }

  createEducation() {
    return this.fb.group({
      degree: ['', Validators.required],
      college: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  addEducation() {
    this.education.push(this.createEducation());
  }
  
  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  // --- Navigation ---
  next() {
    this.step++;
    window.scrollTo(0, 0);
  }

  prev() {
    this.step--;
    window.scrollTo(0, 0);
  }

  // --- File Uploads ---
  uploadPhoto(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.photoPreview = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  uploadIdProof(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.idProofPreview = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  // --- Submit Logic ---
  submit() {
    if (this.form.valid) {
      const finalData = {
        ...this.form.value,
        photo: this.photoPreview,
        idProof: this.idProofPreview, 
      };

      this.userDataService.updateData(finalData);
      
      // Show the profile view after submission
      this.submittedData = finalData;
      window.scrollTo(0, 0);
    } else {
      this.form.markAllAsTouched();
      alert('Please correct errors in the form.');
    }
  }

  // --- Edit Logic (Internal toggle if needed) ---
  handleEdit() {
    this.submittedData = null;
    this.step = 1;
    window.scrollTo(0, 0);
  }
}