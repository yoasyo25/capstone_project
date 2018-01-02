module ApplicationHelper
  def copyright_generator
    AssefaViewTool::Renderer.copyright("Yohanan Assefa", "All rights reserved")
  end
end
