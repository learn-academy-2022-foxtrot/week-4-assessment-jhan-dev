# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:

    -Object oriented programming (OOP), is the general rule of programming where everything is considered an object, and features are compartmentalized to divide the progam into orderly functions of code. Makes programming larger applications easier to manage with teams, simplier to understand and to work on in a team environment such as implementing changes and updates, and to narrow down bugs by segmenting coherent, clean blocks of code.

    -Functional programming (FP) in its simplest form, is writting instructive code that is running ordered commands from top to bottom,telling the application exactly what to do by following strictly scripted code. Generally more difficult to expand to a large-scale project. Functional programming tries to contain data within functions as much as possible without passing data and to just get something done.


Researched answer:

    -Object oriented programming's main bread and butter is sharing data through inherintence, and/or manipulate data to different components of the code to follow to accomplish a specific task. (OOP) naturally encapsulates local variables and data within a class to prevent outside access. Naturally will increase security, and prevent accidental invoking or manipulation of variables.
    
    -Functional programming works with non-mutable data and does not share it. With clean, simple functions, it produces very reliable results without many side effects as the data is not mutated. Proritizes what needs to be completed to return the expected output.


2. What is the difference between a Float and an Integer in Ruby?

Your answer:

    -In programming in general, not just Ruby, Integers also known as Int, are associated with whole numbers. While, floats are decimal numbers or non-whole numbers. Visual examples of both Float and Integer data types are below:

    -Integer --> 23, 50019, 94, 5 etc...

    -Float --> 20.31, 0.018, 5.3


Researched answer:

    -Both Integers(Int) and Floats are numerical data types and are 32 bits wide. Int use all bits to store the numerical value. For float, the 32 bits are divided between 3 unique parts: sign-bit, exponent, and the mantissa.

    (Ex: S EEEEEEEE MMMMMMMMMMMMMMMMMMMMMMM)
    -The sign-bit determines if the number is positive, negative, or neither (such as 0).
    -The expononet is 8 bits.
    -The mantissa is 23 bits.


3. Ruby has an implicit return. What does that mean?

Your answer:

    -In Ruby, a method (Ruby's version of a Function) has an implicit return. Implicit return means the method will return a value back to the user without a return statement. This all happens after invoking the Ruby method with a (puts or p) than the method name w/ an argument.


Researched answer:

    -Implicit return is very important for the Ruby programming language. This is primarily because Ruby automatically returns the last line of code. So it is very common for most lines of code in Ruby to not explicitly have a return statement.


4. What is a block in Ruby?

Your answer:

    -If I recall correctly, a block is like an anonymous function from other programming languages. Assumming this is true, The block would be used to pass arguments.


Researched answer:

    -Blocks in Ruby are anonymous 'blocks' or chunks of code similarly formatted like methods in Ruby because they are methods. The main difference with blocks and methods are that methods can be called or invoked from other parts of the code. While blocks cannot be called through invocation. Blocks are pretty useful to pass to a method call and do not belong to an object, and can receive arguments to return a value.


5. How do you extract a value in a Ruby hash?

Your answer:

    -First of all, Ruby Hashes are similar to Javascript Objects. To access a value in a Ruby hash is also a similar approach to accessing a value from Javascript.


    1)  Example of Javascript if we need access to msg1 in javascriptObj

        let javascriptObj = {
            msg1: 'hello',
            msg2: 'world'
        }
        console.log(javascriptObj['msg1']) --> 'hello'


    2)  Example of Ruby if we need access to msg1 in rubyObj

        rubyObj = {
            :msg1 => 'hello',
            :msg2 => 'world'
        }
        puts rubyObj[:msg1] --> 'hello'

Researched answer:

    -Values in Ruby Hashes can be accessed using bracket notation. First place the hash name in the front, then insert a colon inside the bracket. Following that you will insert the key name. Now you can access the value associated with that specific key in the Ruby Hash!



## Looking Ahead: Terms for Next Week

1. PostgreSQL:

    -Is a free, open-source database management program. It is also known as 'Postgres', which was referring to its origin to replace the Ingres database which was developed by University of Berkeley, California.


2. Ruby on Rails:

    -Is a frame-work designed for Ruby focused server sided web applications. Written in Ruby, it provides a model-view-controller structure ho bundle a database, web service, to build websites and applications.


3. ORM:

    -ORM stands for (Object-Relational-Mapping) which does the heavy lifting of calling the database so you don't have to manually call it yourself. Primary focus is to help map a database for the user to manage and maintain database tables and classes.


4. Active Record:

    -Active Record is an ORM for Ruby. It is a layer of code that is sandwiched between logic and database. To make changes within Active Records, you will write Ruby code before migrations to apply hard changes to the database.


5. Migrations:

    -Is an easy way to apply modifications to your database scehma over time. Migration is a subclass of Active Record, and each migration is similar to being a new version of the database. Migrations use Ruby DSL (Ruby extension syntax) so the user does not have to write SQL to administrate changes. It looks like keywords but are methods to help solve problems, or show data more naturally.

