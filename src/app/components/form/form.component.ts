import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  step = 1;
  photoPreview: string | null = null;
  idProofPreview: string | null = null; 

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      constituency: ['', Validators.required],
      party: ['', Validators.required],
      position: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['male', Validators.required],
      vision: ['', [Validators.required, Validators.minLength(20)]],
      education: this.fb.array([this.createEducation()]),

      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      facebook: ['', [Validators.required]], ///^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/)]
      linkedin: ['', [Validators.required]], // pattern(/^(https?:\/\/)?(www\.)?linkedin.com\/in\/[a-zA-Z0-9_-]/)]

      idType: ['National ID', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  get education(): FormArray {
    return this.form.get('education') as FormArray;
  }

  createEducation() {
    return this.fb.group({
      degree: ['', Validators.required],
      college: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]],
    });
  }

  addEducation() {
    this.education.push(this.createEducation());
  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  next() {
    const currentStepControls = this.getControlsForStep(this.step);
    
    let isStepValid = true;
    currentStepControls.forEach(key => {
      const control = this.form.get(key);
      if (control) {
        if (control.invalid) {
          control.markAsTouched();
          isStepValid = false;
        }
      }
    });

    if (this.step === 1) {
      this.education.controls.forEach(group => {
        group.markAllAsTouched();
        if (group.invalid) isStepValid = false;
      });
    }

    if (isStepValid && this.step < 3) {
      this.step++;
      window.scrollTo(0, 0);
    }
  }

  private getControlsForStep(step: number): string[] {
    if (step === 1) return ['fullName', 'constituency', 'party', 'position', 'dob', 'vision'];
    if (step === 2) return ['email', 'mobile', 'address', 'facebook', 'linkedin'];
    return [];
  }

  prev() {
    if (this.step > 1) {
      this.step--;
      window.scrollTo(0, 0);
    }
  }

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

  submit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      alert('Form Saved Successfully!');
    } else {
      this.form.markAllAsTouched();
      alert('Please correct the errors before submitting.');
    }
  }
}