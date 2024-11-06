# Web Development Projects Requirements

This document outlines the requirements and scoring criteria for three levels of web development projects using Node.js, Express, MongoDB, and vanilla TypeScript.

## Level 1: Multi-User Todo Application (90 points)

### Basic Requirements (50 points)

#### User System (15 points)
- User registration with email and password
- Login/logout functionality
- JWT authentication implementation
- Secure password hashing
- User profile management

#### Todo Management (35 points)
- CRUD operations for todos
- Todo properties:
  * Title
  * Description
  * Due date
  * Status (complete/incomplete)
- Private todos per user
- Input validation for all fields

### Additional Features (40 points)

#### UI/UX Implementation (20 points)
- Responsive design
- Loading state indicators
- Error handling and display
- Form validation feedback
- Clean and modern design

### Bonus Features (20 points)
- Sorting todos by various criteria (5 points)
- Search functionality (5 points)
- Due date notifications (5 points)
- Priority flagging for todos (5 points)

## Level 2: Recipe Management System (95 points)

### Basic Requirements (45 points)

#### User System (15 points)
- User registration and authentication
- Profile management with avatars
- JWT authentication
- Secure password handling
- User settings

#### Recipe Management (30 points)
- CRUD operations for recipes
- Recipe properties:
  * Title
  * Ingredients list
  * Step-by-step instructions
  * Cooking time
  * Serving size
  * Category/tags
  * Image upload support
- Input validation
- Data persistence

### Search and Filtering (25 points)

#### Search Functionality (15 points)
- Search by recipe name
- Search by ingredients
- Category filtering
- Cooking time filtering
- Advanced search options

#### Category Management (10 points)
- CRUD operations for categories
- Multiple category assignments
- Category-based navigation
- Category hierarchy (optional)

### Additional Features (25 points)

#### UI/UX Features (15 points)
- Responsive design
- Image upload and preview
- Loading indicators
- Error handling
- Clean interface design
- User feedback systems

#### Recipe Sharing (10 points)
- Public/private recipe toggle
- Public recipe browsing
- Favorite recipe saving
- Social sharing options

## Level 3: Currency Exchange Tracker (100 points)

### Basic Requirements (45 points)

#### Currency Management (25 points)

use D3.js for graph visualization

- Add new currencies
- Daily exchange rate updates
- CRUD operations
- Historical rate tracking
- Input validation and verification
- Data consistency checks

#### Graph Visualization (20 points)
- Interactive timeline displays
- Multiple currency comparison
- Proper axis labeling
- Scale management
- Zoom functionality
- Data point interaction

### Currency Conversion (30 points)

#### Conversion Calculator (15 points)
- Convert between any currencies
- Real-time rate updates
- Decimal precision handling
- Historical rate conversion
- Bulk conversion support

#### Historical Analysis (15 points)
- Rate change percentage calculation
- High/low rate identification
- Average rate computation
- Trend analysis
- Export functionality

### Additional Features (25 points)

#### Data Visualization (15 points)
- Multiple graph types:
  * Line graphs
  * Bar charts
  * Candlestick charts
- Custom date range selection
- Data export options
- Responsive visualization

#### UI/UX Implementation (10 points)
- Intuitive interface design
- Mobile responsiveness
- Loading state management
- Error handling and display
- User feedback systems

## Technical Requirements (All Projects)

### Backend Development
- Node.js with Express framework
- MongoDB database implementation
- Error handling and logging
- Input validation and sanitization
- Secure authentication
- RESTful API design principles
- API documentation

### Frontend Development
- Vanilla TypeScript implementation
- Type definitions and interfaces or classes
- Responsive design principles
- Error handling and display
- Loading state management
- Form validation
- Cross-browser compatibility

### Code Quality Standards
- Clean code architecture
- Comprehensive documentation
- Type safety implementation
- Error handling protocols
- Security best practices
- Code commenting
- Version control usage

## Grading Criteria

### Point Distribution
- Functionality (40%)
  * Core features implementation
  * Feature completeness
  * Performance
  * Reliability

- Code Quality (25%)
  * Clean code principles
  * Documentation
  * Type safety
  * Error handling
  * Security implementation

- UI/UX Design (20%)
  * User interface design
  * User experience
  * Responsiveness
  * Accessibility
  * Visual appeal

- Additional Features (15%)
  * Bonus features
  * Innovation
  * Extra functionality
  * Performance optimizations

### Submission Requirements
1. Source code via you own GitHub repository
2. README with:
   - Setup instructions
   - Dependencies list
   - API documentation
   - Features overview
3. Video demo of the project in youtube, with a link in the README
4. Presentation/documentation of features

### Evaluation Notes
- All core features must be fully functional
- Code must follow provided technical requirements
- UI must be responsive and user-friendly
- Projects must include proper error handling
- Security best practices must be implemented
- Documentation must be comprehensive
