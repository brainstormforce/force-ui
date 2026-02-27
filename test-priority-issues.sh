#!/bin/bash
# Accessibility Priority Issues Test Script
# Tests the 18 GitHub issues created from accessibility audit

set -e

echo "🔍 Force-UI Accessibility Testing"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Storybook is running
check_storybook() {
  echo "Checking if Storybook is running..."
  if curl -s http://localhost:6006 > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Storybook is running on http://localhost:6006"
    return 0
  else
    echo -e "${YELLOW}⚠${NC} Storybook not running. Starting Storybook..."
    npm run storybook &
    STORYBOOK_PID=$!
    echo "Waiting 30 seconds for Storybook to start..."
    sleep 30

    if curl -s http://localhost:6006 > /dev/null 2>&1; then
      echo -e "${GREEN}✓${NC} Storybook started successfully"
      return 0
    else
      echo -e "${RED}✗${NC} Failed to start Storybook"
      return 1
    fi
  fi
}

# Check if axe CLI is installed
check_axe() {
  if command -v axe &> /dev/null; then
    echo -e "${GREEN}✓${NC} axe CLI is installed"
    return 0
  else
    echo -e "${YELLOW}⚠${NC} axe CLI not found. Install with: npm install -g @axe-core/cli"
    return 1
  fi
}

# Create reports directory
mkdir -p accessibility-test-results

echo ""
echo "📋 Testing Priority Issues"
echo "=================================="
echo ""

# Test #370: Dialog aria-modal
echo "Testing #370: Dialog missing aria-modal..."
if check_axe; then
  axe http://localhost:6006/?path=/story/dialog--simple \
    --rules=aria-dialog-name,aria-modal \
    > accessibility-test-results/issue-370-dialog-aria-modal.txt 2>&1

  if grep -q "aria-modal" accessibility-test-results/issue-370-dialog-aria-modal.txt; then
    echo -e "${RED}✗${NC} #370 FAILS: Dialog missing aria-modal=\"true\""
    echo "  → See: https://github.com/brainstormforce/force-ui/issues/370"
  else
    echo -e "${GREEN}✓${NC} #370 PASS: Dialog has aria-modal"
  fi
else
  echo -e "${YELLOW}⊘${NC} #370 SKIPPED: axe CLI not available"
fi

echo ""

# Test #371: Dialog focus trap (manual test recommended)
echo "Testing #371: Dialog focus trap..."
echo -e "${YELLOW}⚠${NC} #371: Manual keyboard test required"
echo "  → Tab through dialog and verify focus doesn't escape"
echo "  → See: https://github.com/brainstormforce/force-ui/issues/371"

echo ""

# Test #372: Button icon-only aria-label
echo "Testing #372: Button icon-only aria-label..."
if check_axe; then
  axe http://localhost:6006/?path=/story/button--icon-only \
    --rules=button-name \
    > accessibility-test-results/issue-372-button-icon-label.txt 2>&1

  if grep -q "button-name" accessibility-test-results/issue-372-button-icon-label.txt; then
    echo -e "${RED}✗${NC} #372 FAILS: Icon-only buttons missing aria-label"
    echo "  → See: https://github.com/brainstormforce/force-ui/issues/372"
  else
    echo -e "${GREEN}✓${NC} #372 PASS: Icon buttons have accessible names"
  fi
else
  echo -e "${YELLOW}⊘${NC} #372 SKIPPED: axe CLI not available"
fi

echo ""

# Test #373: Input aria-invalid
echo "Testing #373: Input aria-invalid..."
if check_axe; then
  axe http://localhost:6006/?path=/story/input--error \
    --rules=aria-valid-attr-value \
    > accessibility-test-results/issue-373-input-aria-invalid.txt 2>&1

  if grep -q "aria-invalid" accessibility-test-results/issue-373-input-aria-invalid.txt; then
    echo -e "${RED}✗${NC} #373 FAILS: Input missing aria-invalid in error state"
    echo "  → See: https://github.com/brainstormforce/force-ui/issues/373"
  else
    echo -e "${GREEN}✓${NC} #373 PASS: Input has aria-invalid"
  fi
else
  echo -e "${YELLOW}⊘${NC} #373 SKIPPED: axe CLI not available"
fi

echo ""

# Test #378: prefers-reduced-motion (manual test only)
echo "Testing #378: prefers-reduced-motion support..."
echo -e "${YELLOW}⚠${NC} #378: Manual test required"
echo "  → Enable Reduce Motion in OS settings"
echo "  → Open dialogs/dropdowns and verify no animations"
echo "  → See: https://github.com/brainstormforce/force-ui/issues/378"

echo ""

# Test #379: Button aria-busy (manual SR test recommended)
echo "Testing #379: Button aria-busy for loading..."
echo -e "${YELLOW}⚠${NC} #379: Screen reader test recommended"
echo "  → Test with NVDA/VoiceOver on loading button"
echo "  → Should announce 'busy' or 'loading'"
echo "  → See: https://github.com/brainstormforce/force-ui/issues/379"

echo ""
echo "=================================="
echo "📊 Test Summary"
echo "=================================="
echo ""
echo "Automated tests completed. Check accessibility-test-results/ for details."
echo ""
echo "Manual tests required:"
echo "  - #371: Dialog focus trap (keyboard test)"
echo "  - #374: Dialog aria-labelledby (screen reader test)"
echo "  - #375: Dialog initial focus (keyboard test)"
echo "  - #378: prefers-reduced-motion (visual test)"
echo "  - #379: Button aria-busy (screen reader test)"
echo "  - #381-#386: Additional issues"
echo ""
echo "Full testing guide: accessibility-testing-guide.md"
echo "All issues: https://github.com/brainstormforce/force-ui/issues/369"
echo ""

# Cleanup
if [ ! -z "$STORYBOOK_PID" ]; then
  echo "Stopping Storybook..."
  kill $STORYBOOK_PID 2>/dev/null || true
fi

echo -e "${GREEN}✓${NC} Testing complete!"
