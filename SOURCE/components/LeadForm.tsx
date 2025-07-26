'use client';

import { useForm } from 'react-hook-form';
import { importLead } from '@/lib/effiApi';

export default function LeadForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        Phone: data.phone,
        BestTimeToContact: new Date().toISOString(),
        LoanAmount: 100000, // optional
        LoanPurpose: 'Refinance',
        ProductSpecialty: 'Home Loan',
        ProductCategory: 'Owner Occupied',
        ProductTypes: 'PAYG',
      };

      const res = await importLead(payload);
      alert('✅ Lead submitted successfully!');
      reset();
    } catch (err: any) {
      alert('❌ ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('firstName')} placeholder="First Name" required />
      <input {...register('lastName')} placeholder="Last Name" required />
      <input {...register('email')} placeholder="Email" type="email" required />
      <input {...register('phone')} placeholder="Phone" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
