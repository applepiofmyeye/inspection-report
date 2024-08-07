export function camelCaseToTitleCase(str: string) {
    // Add space before any uppercase letter that follows a lowercase letter
    const spacedStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    // Capitalize the first letter of each word and lowercase the rest
    return spacedStr
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }