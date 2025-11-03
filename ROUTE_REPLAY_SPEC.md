# Route Replay Feature - Life360 Style

## Overview
Route replay feature inspired by Life360's playback interface, allowing drivers to visualize their routes with animated tracking.

## Key Features (Based on Life360)

### 1. Map View
- **Purple path line** showing the complete route
- **Animated vehicle icon** that moves along the path during playback
- **Speed indicator** showing current speed at playback position (e.g., "16 mph")
- **Map styling** with clear road visibility and topographical features
- **Location pins** for start/end points and key stops

### 2. Playback Controls
- **Progress scrubber** with purple indicator
- **Play/Pause button** (two vertical lines for pause)
- **Time range display** (start time → end time, total duration)
- **Smooth animation** as vehicle icon travels along path

### 3. Route Details
- **Drive title** (e.g., "Miguel's 21 mi drive")
- **Start point** with address and timestamp
- **End point** with address and timestamp
- **Dotted line** connecting start/end points visually
- **Total distance** and **duration** prominently displayed

### 4. Visual Elements
- **Profile picture** in vehicle icon (optional)
- **Speed bubbles** that appear at different points along route
- **Elevation/terrain indicators** (mountain icons, etc.)
- **Map layer controls** for different view types

## Implementation for RouteRank

### Mobile App (React Native/Expo)
- Use **react-native-maps** for map rendering
- **react-native-reanimated** for smooth vehicle animation
- Background GPS tracking using **expo-location**
- Store route waypoints with timestamps and speeds
- Playback controls with scrubber using **react-native-slider**

### Data Structure
```typescript
interface RouteReplay {
  id: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  duration: number; // minutes
  distance: number; // miles
  waypoints: Waypoint[];
  startLocation: Location;
  endLocation: Location;
}

interface Waypoint {
  latitude: number;
  longitude: number;
  timestamp: Date;
  speed: number; // mph
  accuracy?: number;
}
```

### UI Components Needed
1. **MapContainer** - Full-screen map view
2. **RoutePath** - Purple polyline showing route
3. **VehicleMarker** - Animated icon that moves along path
4. **SpeedBubble** - Floating speed indicator
5. **PlaybackControls** - Progress bar, play/pause
6. **RouteDetails** - Start/end points, times, distance

## Benefits for RouteRank
- **Visual proof** of routes completed
- **Auto-verified mileage** from GPS data
- **Engaging experience** for drivers to review routes
- **Competitive advantage** - shows actual route optimization
- **Trust** - verifiable proof of deliveries made

## Integration
- Optional feature (user choice)
- Runs in background during route
- Minimal battery impact
- Data stored securely in Supabase
- Can be shared with other drivers (optional)

