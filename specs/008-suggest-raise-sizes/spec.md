# Feature Specification: Suggest Raise Sizes

**Feature Branch**: `008-suggest-raise-sizes`  
**Created**: 2026-03-09  
**Status**: Draft  
**Input**: User description: "for the case that the calculator suggest raise, can it also suggest the raise percentage or values according to the current pot size"

## Clarifications

### Session 2026-03-09

- Q: Should suggested raise values be clickable? → A: Interactive (Clickable): Clicking a size automatically sets the Facing Bet input.
- Q: What sizing logic should be used when facing a bet? → A: Hybrid: Show both bet multiples (e.g., 3x) and Pot % (e.g., 50% Pot).
- Q: How should stack constraints be handled? → A: Show Calculated: Show the calculated theoretical value even if it exceeds the user's stack.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Suggested Raise Sizes (Priority: P1)

As a player receiving a "RAISE" recommendation, I want to see specific suggested raise amounts based on the current pot size, so I don't have to calculate the sizing manually.

**Why this priority**: Recommendations like "RAISE" are incomplete without specific sizing advice. This adds immediate actionable value to the core engine output.

**Independent Test**: Can be tested by inputting a hand state where the engine recommends "RAISE" and verifying that clickable percentage-based values (e.g., 50% Pot: $50) appear in the UI.

**Acceptance Scenarios**:

1. **Given** the calculator recommendation is "RAISE", **When** the results are displayed, **Then** the system MUST show at least three common raise sizes.
2. **Given** the calculator recommendation is NOT "RAISE", **When** the results are displayed, **Then** the system SHOULD NOT show raise sizing suggestions.
3. **Given** a current pot of $100 and no facing bet, **When** the recommendation is "RAISE", **Then** the suggestions should show Pot percentages (33%, 50%, 100%).
4. **Given** a current pot of $100 and a facing bet of $50, **When** the recommendation is "RAISE", **Then** the suggestions should show both bet multiples (e.g., 3x) and the corresponding Pot percentage.
5. **Given** a visible raise suggestion, **When** the user clicks it, **Then** the Facing Bet input MUST be updated to that absolute value.

---

### User Story 2 - Dynamic Adjustment of Suggestions (Priority: P2)

As a player, I want the suggested raise values to update instantly when I adjust the pot size, so I always have accurate sizing advice.

**Why this priority**: Real-time feedback is a core principle of the app. Ensuring these suggestions are reactive maintains the "live tool" feel.

**Independent Test**: Change the Pot Size input from 100 to 200 and verify the suggested "50% Pot" value changes from 50 to 100.

**Acceptance Scenarios**:

1. **Given** a displayed "RAISE" recommendation, **When** the user modifies the Pot Size input, **Then** the suggested absolute values MUST update immediately.

---

### Edge Cases

- **Large Pot Sizes**: If the pot is extremely large, ensure formatting doesn't break the UI (e.g., $1,000,000).
- **All-In Situation**: Suggestions MUST show the theoretical calculated amount even if it exceeds the Hero's stack (B).
- **Facing a Bet**: When raising over a bet, show hybrid suggestions (C).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST calculate suggested raise amounts when the recommendation is "RAISE".
- **FR-002**: System MUST display suggestions as both a percentage of the pot and an absolute value (e.g., "50% Pot ($50)").
- **FR-003**: System MUST provide at least three standard increments: 33%, 50%, and 100% of the pot.
- **FR-004**: System MUST update the Facing Bet input when a suggested size is clicked.
- **FR-005**: System MUST ensure suggestions are calculated based on the *current* pot size (including the pot and any facing bet already committed).
- **FR-006**: System MUST show bet multiples (3x, 4x) alongside Pot percentages when the user is facing a bet.
- **FR-007**: System MUST display theoretical calculated raise sizes even if they exceed the user's current stack.

### Key Entities *(include if feature involves data)*

- **RaiseSuggestion**: An object containing a label (e.g., "Half Pot"), a percentage (0.5), and a calculated absolute value ($50).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Raise suggestions appear within 100ms of the engine outputting a "RAISE" recommendation.
- **SC-002**: Calculated values are accurate to within 0.01 currency units.
- **SC-003**: Suggestions use a minimum 14px font size and maintain a WCAG AA contrast ratio (> 4.5:1) for readability on mobile without requiring scrolling.
