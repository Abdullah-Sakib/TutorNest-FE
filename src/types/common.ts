export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ITutor = {
  _id: string;
  name: string;
  image: string;
  phone: string;
  email: string;
  education: string;
  experience: number;
  location: string;
  description: string;
  fee: number;
  subjects: string[];
  available_slots: {
    slot: string;
    status: string;
  }[];
  category: string;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IAdmin {
  id: string;
  name: Name;
  gender: string;
  managementDepartment: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IFaculty {
  id: string;
  name: Name;
  gender: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  academicFaculty: string;
  academicDepartment: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IStudent {
  id: string;
  name: Name & { id: string };
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian & { id: string };
  localGuardian: LocalGuardian & { id: string };
  department: string;
  subject: string;
  createdAt: string;
  updatedAt: string;
}

export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
}
export interface LocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface IAcademicFaculty {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAcademicDepartment {
  id: string;
  title: string;
  academicFaculty: IAcademicFaculty;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAcademicSemester {
  id: string;
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBuilding {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
}

export interface IRoom {
  id: string;
  roomNumber: string;
  floor: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  buildingId: string;
  building: IBuilding;
}

export interface IAcademicCoreSemester {
  id: string;
  syncId?: null;
  title: string;
  code: string;
  year: number;
  isCurrent?: boolean;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
}
export interface ISemesterRegistration {
  id: string;
  startDate: string;
  endDate: string;
  status: string;
  maxCredit: number;
  minCredit: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicSemesterId: string;
  academicSemester?: IAcademicCoreSemester;
}

export interface IAcademicCoreDepartment {
  id: string;
  syncId?: null;
  title: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicFacultyId: string;
}

export interface IAcademicCoreFaculty {
  id: string;
  facultyId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  profileImage: string;
  email: string;
  contactNo: string;
  gender: string;
  bloodGroup: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicDepartmentId: string;
  academicFacultyId: string;
}

export interface ICoreFaculty {
  id: string;
  facultyId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  profileImage: string;
  email: string;
  contactNo: string;
  gender: string;
  bloodGroup: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicDepartmentId: string;
  academicFacultyId: string;
  academicFaculty: IAcademicCoreFaculty;
  academicDepartment: IAcademicCoreDepartment;
}

export interface ICoreStudent {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  profileImage: string;
  email: string;
  contactNo: string;
  gender: string;
  bloodGroup: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicSemesterId: string;
  academicDepartmentId: string;
  academicFacultyId: string;
  academicFaculty: IAcademicCoreFaculty;
  academicDepartment: IAcademicCoreDepartment;
  academicSemester: IAcademicCoreSemester;
}
