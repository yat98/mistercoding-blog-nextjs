'use client';

import PageTitle from '@/components/ui/PageTitle';
import { CardBody, CardRoot } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Page() {
  return (
    <>
      <div className="my-4!">
        <PageTitle title="Contact" />
        <div className="my-4!">
          <CardRoot>
            <CardBody>
              <p className="mb-4!">For consultations. Please contact me at:</p>
              <div className="flex! items-center!">
                <span>
                  <AiOutlineMail />
                </span>
                <p className="ml-4!">loremipsum@mail.com</p>
              </div>
              <div className="flex! items-center! mt-3!">
                <span>
                  <AiOutlinePhone />
                </span>
                <p className="ml-4!">(+62) 812-345-6789</p>
              </div>
            </CardBody>
          </CardRoot>
        </div>
      </div>
    </>
  );
}
