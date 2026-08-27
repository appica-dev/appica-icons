<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 11a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0V8.427q0-.27.04-.536l.716-4.828C10.82 2.466 11.353 2 12 2s1.18.466 1.244 1.063l.716 4.828q.04.267.04.536V11m-.99-1.72 2.235 1.276q.234.135.446.3l3.836 2.911c.487.352.624 1.04.3 1.596-.325.556-1 .782-1.548.541l-4.555-1.68a4 4 0 0 1-.486-.231l-2.235-1.277m1.997 0-2.236 1.277a4 4 0 0 1-.485.23l-4.555 1.681c-.551.241-1.223.015-1.548-.54-.324-.557-.187-1.245.3-1.597l3.836-2.91q.211-.168.446-.3l2.235-1.277M7 21h10m-7 0 1-7m2 0 1 7\"/>";
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
