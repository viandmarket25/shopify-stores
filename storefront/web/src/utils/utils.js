
let reduceTextWithEndingSuffix=(text, maxCharacters) =>{
    if (text.length <= maxCharacters) {
      return text;
    } else {
      const reducedText = text.slice(0, maxCharacters);

      const last3Chars = text.slice(-3);

      const reducedTextWithEllipsis = reducedText + '... ' + last3Chars;

      return reducedTextWithEllipsis;
    }
}


function formatDateMode(timestampString) {
    const timestamp = new Date(timestampString);
  
    // Check if the provided value is a valid date
    if (isNaN(timestamp.getTime())) {
      return 'Invalid Date';
    }
  
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    return timestamp.toLocaleDateString('en-US', options);
  }
  

  function timeAgo(fromDateString, toDateString = new Date().toISOString()) {
    const fromDate = new Date(fromDateString);
    const toDate = new Date(toDateString);
  
    const seconds = Math.floor((toDate - fromDate) / 1000);
  
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }
  
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
  
    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  
    const weeks = Math.floor(days / 7);
    if (weeks < 4.33) {
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    }
  
    const months = Math.floor(days / 30.44);
    if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    }
  
    const years = Math.floor(months / 12);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
  
  // Example usage
  const fromDate = '2023-11-22 02:03:04.786';
  const timeDifference = timeAgo(fromDate);
  //console.log(timeDifference);
  
  function formatBlogContent(content) {
    // Replace \r\n with <br/> and use CSS white-space property
    let formattedContent = content.replace(/\r\n/g, "<br/>");
    formattedContent = formattedContent.replace("<p></p>", "<br/>");
    //return `<div style="white-space: pre-line;">${formattedContent}</div>`;

    return formattedContent 
  }
  
export default {
    reduceTextWithEndingSuffix,
    formatDateMode,
    timeAgo,
    formatBlogContent

};