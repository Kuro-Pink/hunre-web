import { Input } from './imput';
import { ReviewStar } from './ReviewStar';

export const ReviewForm = () => {
    return (
        <div className="w-[42rem] rounded-lg bg-white p-16">
            <h1 className="text-2xl font-bold">Overall ratting</h1>
            <div className="leading-relaxed">
                <ReviewStar />
                <p className="text-sm font-medium">Click to rate</p>
            </div>

            <Input title="Review title" placeholder="Example: Easy to use" />
            <p className="mt-4 font-semibold">Would you reconment this product to a friend?</p>
            <div className="ml-2 mt-4 flex gap-8">
                <div>
                    <input
                        className="mr-2 scale-150 cursor-pointer accent-black"
                        type="radio"
                        name="product"
                        id="yes"
                        value="yes"
                    />
                    <label className="cursor-pointer" htmlFor="yes">
                        Yes
                    </label>
                </div>
                <div>
                    <input
                        className="mr-2 scale-150 cursor-pointer accent-black"
                        type="radio"
                        name="product"
                        id="no"
                        value="no"
                    />
                    <label className="cursor-pointer" htmlFor="no">
                        No
                    </label>
                </div>
            </div>
            <Input title="Product review" placeholder="Example: Since I bought this a month ago" />
            <div className="textce flex items-center gap-2">
                <div className="grow">
                    <Input title="Nick name" placeholder="Examole: honghieu" />
                </div>
                <div className="grow">
                    <Input title="Email address" placeholder="Examole: hhieu04@hehe.com" />
                </div>
            </div>
            <div className="mt-4">
                <input
                    className="mr-2 scale-150 cursor-pointer accent-black"
                    type="radio"
                    name="product"
                    id="no"
                    value="no"
                />
                <label className="cursor-pointer font-semibold" htmlFor="no">
                    I accept the terms and conditions
                </label>
            </div>
            <p className="mt-4">
                The Gravity Forms fields are grouped into four categories: standard, advanced, post, and pricing.
                Whether you want to create a simple contact form, build quote request forms for your service, or start
                accepting orders through your website, the varied selection of fields means you should have no trouble
                building the forms you need.
            </p>
            <button className="mt-4 rounded-md border-2 bg-blue-500 px-4 py-2 text-white">Submit</button>
        </div>
    );
};
