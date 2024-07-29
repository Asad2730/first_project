
export interface UserRepo {
    id: number;
    email: string;
    name: string;
    phoneNo: string;
  }

  export interface UserFormProps {
    user: UserRepo;
    onUpdate: () => void;
    onDelete: () => void;
  }
