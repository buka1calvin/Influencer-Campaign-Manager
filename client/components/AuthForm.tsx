"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Link from "next/link";

type FormType = "sign-in" | "sign-up";
const AuthFormSchema = (formType: FormType) => {
  return z.object({
    name:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
    email: z.string().email(),
    telephone:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
    role:
      formType === "sign-up"
        ? z.enum(["Influencer", "Brand"])
        : z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [loading, setLoading] = useState(false);
  const formSchema = AuthFormSchema(type);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      role: "Influencer",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    console.log(values);
    setLoading(false);
  };
  return (
    <div className="w-full md:h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center h-full gap-3"
        >
          <h1 className="form-title">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="">
                    <FormLabel className="font-semibold">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Full Name"
                        className=""
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="">
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Email"
                      className=""
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="" />
              </FormItem>
            )}
          />
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <div className="">
                    <FormLabel className="font-semibold">Telephone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Telephone Number"
                        className=""
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          )}
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <div className="">
                    <FormLabel className="font-semibold">Role</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Influencer">Influencer</SelectItem>
                          <SelectItem value="Brand">Brand</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </div>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="">
                  <FormLabel className="font-semibold">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter Your Password"
                      className=""
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-primary mt-4"
            disabled={loading}
          >
            {type === "sign-up" ? "Sign Up" : "Sign In"}
          </Button>
          <div className="text-sm flex justify-center">
            <p className="text-text">
              {type === "sign-in"
                ? "Don't Have An Account"
                : "Already have An Account"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="ml-1 font-medium text-secondary"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
