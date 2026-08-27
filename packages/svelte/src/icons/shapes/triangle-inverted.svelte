<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.363 20.095 2.257 6.817a1.85 1.85 0 0 1-.006-1.869c.166-.285.404-.522.692-.689s.615-.255.95-.259h16.214c.335.004.662.093.95.26.288.166.527.403.692.688a1.85 1.85 0 0 1-.005 1.869l-8.107 13.278c-.17.276-.41.505-.697.663a1.94 1.94 0 0 1-1.88 0 1.9 1.9 0 0 1-.697-.663\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
