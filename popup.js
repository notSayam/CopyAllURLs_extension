document.addEventListener('DOMContentLoaded', function() {
  const copyBtn = document.getElementById('copyBtn');
  const resultArea = document.getElementById('result');
  const formatOptions = document.getElementsByName('format');
  
  copyBtn.addEventListener('click', function() {
    // Get selected format
    let format = 'plain';
    for (const option of formatOptions) {
      if (option.checked) {
        format = option.value;
        break;
      }
    }
    
    // Get all tabs
    chrome.tabs.query({}, function(tabs) {
      let result = '';
      
      tabs.forEach(function(tab) {
        switch(format) {
          case 'markdown':
            result += `[${tab.title}](${tab.url})\n`;
            break;
          case 'html':
            result += `<a href="${tab.url}">${tab.title}</a>\n`;
            break;
          default: // plain
            result += `${tab.url}\n`;
        }
      });
      
      // Display in textarea
      resultArea.value = result;
      
      // Copy to clipboard
      resultArea.select();
      document.execCommand('copy');
      
      // Update button text temporarily
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(function() {
        copyBtn.textContent = originalText;
      }, 1500);
    });
  });
});