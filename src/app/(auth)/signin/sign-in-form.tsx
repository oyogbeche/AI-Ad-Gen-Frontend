"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { ArrowLeft} from "lucide-react";

//import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
//import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,

} from "@/components/ui/form";
import { LoadingButton } from "@/domains/auth/components/loading-button";
import Image from "next/image";
import { useGoogleAuth } from "@/domains/auth/api/useGoggleAuth";
import { Button } from "@/components/ui/button";

//import { useGoogleAuth } from "@/domains/auth/api/useGoggleAuth";


// Define the form schema with Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().default(false),
});

// Define the form values type
type FormValues = z.infer<typeof formSchema>;

export function SignInForm() {
  //const [showPassword, setShowPassword] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

  const {handleGoogleLogin, isLoading: isGoogleLoading} = useGoogleAuth();

  // Initialize react-hook-form with zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Handle form submission
  /* const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      // Here you would typically call your authentication API
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setIsLoading(false);
    }
  }; */

  return (
    <Card className="w-full max-w-[550px] mx-auto border rounded-lg shadow-sm">
      <CardContent className="pt-6 pb-8 px-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto font-normal text-foreground hover:bg-transparent"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>

        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
          <p className="text-muted-foreground">
            Continue in with google
          </p>
        </div>

       <Form {...form}>
          <form onSubmit={() => {}} className="space-y-6">
         
          {/*    <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="border-[#DE8ADE]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                        className="border-[#DE8ADE]"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="rememberMe"
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="rememberMe"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Link
                href="/recover"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot Password?
              </Link>
            </div> */}

    {/*         <LoadingButton
              type="submit"
              className="w-full bg-[#b800b8] hover:bg-purple-300 text-white"
              isLoading={isLoading}
              disabled={!form.formState.isValid || isLoading}
            >
              Sign In
            </LoadingButton> */}

      <div className="w-full flex flex-col items-center justify-center space-y-4">
            <LoadingButton
                      type="button"
                      className="w-[400px] border-[1px] border-[#E9E9E9] bg-white hover:bg-gray-100 text-black my-2 py-6 mx-auto"
                      isLoading={isGoogleLoading}
                      onClick={handleGoogleLogin}
                    >
                    <Image src="/google.svg" alt="Google" width={20} height={20} /> <p>Continue With Google</p>
            </LoadingButton>
            </div>

         
            

        {/*     <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Create account
              </Link>
            </div> */}
          </form>
        </Form>

           {/* Google Sign-In Button */}
   
      </CardContent>
    </Card>
  );
}
