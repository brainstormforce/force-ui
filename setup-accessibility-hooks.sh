#!/bin/bash
# Setup script for accessibility testing pre-commit hooks
# Run this once to enable automatic accessibility checks before commits

set -e

echo "🔧 Setting up accessibility pre-commit hooks..."
echo ""

# Check if Husky is installed
if ! command -v husky &> /dev/null; then
    echo "📦 Installing Husky..."
    npm install -D husky
else
    echo "✓ Husky already installed"
fi

# Initialize Husky
echo "🚀 Initializing Husky..."
npx husky init

# Create pre-commit hook
echo "📝 Creating pre-commit hook..."
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🧪 Running accessibility tests..."

# Run priority accessibility tests
npm run test:a11y:priority

# If tests fail, prevent commit
if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Accessibility tests failed!"
    echo "Please fix the issues above before committing."
    echo ""
    echo "To bypass this check (not recommended):"
    echo "  git commit --no-verify"
    exit 1
fi

echo "✅ Accessibility tests passed!"
EOF

# Make hook executable
chmod +x .husky/pre-commit

echo ""
echo "✅ Setup complete!"
echo ""
echo "Pre-commit hook installed at: .husky/pre-commit"
echo ""
echo "From now on, accessibility tests will run automatically before each commit."
echo ""
echo "To disable: Delete .husky/pre-commit"
echo "To bypass once: git commit --no-verify"
echo ""
