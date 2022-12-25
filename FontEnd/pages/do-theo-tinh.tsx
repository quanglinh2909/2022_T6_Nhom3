import { MainLayout } from '@/components/common';
import * as React from 'react';
import TableHome from '@/components/home/tableHome';

export interface IDoTheoTinhProps {
}

const DoTheoTinh = (props: IDoTheoTinhProps) =>{
  return (
   <>
   <>
    <TableHome data={undefined} />
    <TableHome data={undefined} />
</>
   </>
  );
}
DoTheoTinh.Layout = MainLayout;

export default DoTheoTinh;