'use client';

import PageTitle from '@/components/ui/PageTitle';
import { CardBody, CardRoot } from '@chakra-ui/react';

export default function Page() {
  return (
    <>
      <div className="my-4!">
        <PageTitle title="About" />
        <div className="my-4!">
          <CardRoot maxW={'2xl'}>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam ipsa at tempora nobis voluptatum illo, deserunt quia
                vero consequuntur voluptate temporibus, laudantium repellat modi
                aperiam, quasi quaerat repellendus dignissimos officia?
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p className="mt-4!">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                quidem, delectus, optio repellendus tempora eveniet voluptatem
                eum atque.
              </p>
            </CardBody>
          </CardRoot>
        </div>
      </div>
    </>
  );
}
