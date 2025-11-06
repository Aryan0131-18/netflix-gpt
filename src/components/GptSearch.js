import { BG_URL } from "../utils/Constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
    return (<><div className='fixed inset-0 -z-10'>
        <img className="w-full h-full object-cover"
            src={BG_URL}
            alt="logo"
        />
    </div>
        <div className="">

            <GptSearchBar />
            <GptMovieSuggestion />

        </div>
    </>

    );
};
export default GPTSearch;