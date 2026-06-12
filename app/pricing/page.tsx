"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { addToast } from "@heroui/toast";
import { Accordion, AccordionItem, Image } from "@heroui/react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}>cat plans</h1>

      <p>types of cats</p>

      <section className="mt-20">
        <h2 className="text-center text-4xl font-bold">monthly cat plans</h2>
        <div className="flex justify-center gap-8 mt-20">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-primary">
                $29.99 <span className="text-sm">/mo</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>cute baby orange cat</li>
                <Image
                  alt="cat"
                  src="https://thf.bing.com/th/id/OIP.ag3Gzf_wyqqAdVjEjzun7QHaE8?w=271&h=181&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3"
                />

                <li>portable</li>
                <li>friendly</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                $59.99 <span className="text-sm">/mo</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>tabby cat with lazer eyes</li>
                <Image
                  alt="cat 2"
                  src="https://tse1.mm.bing.net/th?&id=OVP.2IvGVanT5okkiNgwWSIQoAEkII&w=316&h=177&c=7&pid=2.1&rs=1"
                />
                <li>good for battle</li>
                <li>Still cute and cuddley</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-success">
                $99.99 <span className="text-sm">/mo</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>emo cat</li>
                <Image
                  alt="cat 3"
                  src="https://thf.bing.com/th/id/OIP.BWdx2IYvbYhV8LznEdQ5OQHaJ4?w=154&h=205&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3"
                />
                <li>will go to concerts with you</li>
                <li> will listen to msuic with you (only emo)</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="success"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                sign up
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold">FAQ</h2>
        <Accordion>
          <AccordionItem key={1} title="Why time cats?">
            Because noboody else sells them!
          </AccordionItem>
          <AccordionItem key={2} title="How many cats do we sell per year?">
            According to our 2063 statistics, we sold roughly 4800 cats.
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
