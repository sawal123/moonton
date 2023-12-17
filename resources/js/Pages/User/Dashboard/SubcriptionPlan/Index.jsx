import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubcritionCard";
import { router } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function subcriptionPlan({ auth, env, subcriptionPlans }) {
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subcriptionPlane.userSubscribe", {
                subcriptionPlan: id,
            }),
            {},
            {
                only: ["userSubcription"],
                onSuccess: ({ props }) => {
                    // console.log({props});
                    onSnapMidtrans(props.userSubcription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubcription) => {
        console.log(userSubcription.snap_token);
        snap.pay(userSubcription.snap_token, {
            // Optional
            onSuccess: function (result) {
                router.visit(route("user.dashboard.index"));
            },
            onPending: function (result) {
                console.log({ result });
            },
            onError: function (result) {
                console.log({ result });
            },
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}
                    {subcriptionPlans.map((plan) => (
                        <SubscriptionCard
                            name={plan.name}
                            price={plan.price}
                            durationInMonth={plan.active_period_in_months}
                            features={JSON.parse(plan.features)}
                            isPremium={plan.name === "Premium"}
                            key={plan.id}
                            onSelectSubcription={() =>
                                selectSubscription(plan.id)
                            }
                        />
                    ))}

                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
