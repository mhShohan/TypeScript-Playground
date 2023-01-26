function greetings(person: string, date: Date): string {
  return `Hello! ${person} - ${date.toDateString()}`;
}

console.log(greetings('Shohan', new Date()));
