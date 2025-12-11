import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import os from "os";

export async function registerRoutes(app: Express): Promise<Server> {
  // Server stats endpoint
  app.get("/api/server-stats", (_req, res) => {
    try {
      // Get CPU load (1 minute average)
      const cpus = os.cpus();
      const cpuLoad = os.loadavg()[0] / cpus.length * 100;
      
      // Get memory usage
      const totalMemory = os.totalmem();
      const freeMemory = os.freemem();
      const usedMemoryPercent = ((totalMemory - freeMemory) / totalMemory) * 100;
      
      // Calculate stability based on system health
      const stability = Math.max(50, Math.min(100, 100 - (cpuLoad / 2) - (usedMemoryPercent / 4)));
      
      // Determine memory status
      let memoryStatus = "OPTIMAL";
      if (usedMemoryPercent > 90) {
        memoryStatus = "CRITICAL";
      } else if (usedMemoryPercent > 75) {
        memoryStatus = "WARNING";
      } else if (usedMemoryPercent > 60) {
        memoryStatus = "MODERATE";
      }
      
      res.json({
        stability: Math.round(stability),
        cpuLoad: Math.min(100, Math.round(cpuLoad)),
        memoryStatus,
        timestamp: Date.now()
      });
    } catch (error) {
      console.error("Error fetching server stats:", error);
      res.status(500).json({ error: "Failed to fetch server stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
