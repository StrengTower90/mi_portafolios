import './Phrase.css';

export const Phrase = () => {
    return(
        <div className="phrase_container">
            <svg className='phrase_blood-1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#BAE6FF" d="M43.2,-15.8C50.5,8.5,47.2,34.4,28.5,50.7C9.9,66.9,-24.1,73.4,-46.6,58.4C-69.2,43.4,-80.2,6.9,-70.6,-20.6C-60.9,-48.1,-30.4,-66.5,-6.3,-64.5C17.9,-62.5,35.9,-40,43.2,-15.8Z" transform="translate(100 100)" />
            </svg>

            <svg className='phrase_blood-2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#A7F0BA" d="M43.2,-15.8C50.5,8.5,47.2,34.4,28.5,50.7C9.9,66.9,-24.1,73.4,-46.6,58.4C-69.2,43.4,-80.2,6.9,-70.6,-20.6C-60.9,-48.1,-30.4,-66.5,-6.3,-64.5C17.9,-62.5,35.9,-40,43.2,-15.8Z" transform="translate(100 100)" />
            </svg>
            
            <div className="phrase">
                <h1>El unico modo de hacer un gran trabajo. es amar lo que haces.</h1>
            </div>
        </div>
    )
}