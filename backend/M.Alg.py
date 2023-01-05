# Import the random library
import random

# Create a list of names
names = ["Katie", "Jenny", "John", "Matt", "Eli"]

# Create a list of questions
questions = ["Do you like dogs?", "Do you like cats?", "Do you like pizza?", "Do you like ice cream?",
             "Do you like beer?"]

# Create an empty list to store the user's answers
user_answers = []


# Create a function to get the user's answers
def get_user_answers():
    # Loop through the list of questions
    for question in questions:
        # Ask the user the question
        answer = input(question)
        # Add the user's answer to the list
        user_answers.append(answer)
    # Return the user's answers
    return user_answers


# Create a function to get the random name
def get_random_name():
    # Get a random name from the list of names
    random_name = random.choice(names)
    # Return the random name
    return random_name


# Create a function to get the random answers
def get_random_answers():
    # Create an empty list to store the random answers
    random_answers = []
    # Loop through the list of questions
    for _ in questions:
        # Get a random answer
        random_answer = random.choice(["yes", "no"])
        # Add the random answer to the list
        random_answers.append(random_answer)
    # Return the random answers
    return random_answers


# Create a function to compare the answers
def compare_answers(user_answer, random_answers):
    # Create a variable to store the number of matching answers
    matching_answers = 0
    # Loop through the list of user answers
    for i in range(len(user_answer)):
        # Check if the user's answer matches the random answer
        if user_answer[i] == random_answers[i]:
            # Add 1 to the number of matching answers
            matching_answers += 1
    # Return the number of matching answers
    return matching_answers


# Create a function to get the score
def get_score(matching_answers):
    # Calculate the score
    score = matching_answers / len(questions) * 100
    # Return the score
    return score


# Create a function to print the results
def print_results(random_name, score):
    # Print the random name
    print(f"Your match is {random_name}!"
          f"Your matchmaker score is {score}")
