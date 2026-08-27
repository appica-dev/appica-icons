<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464.81 4.865a1 1 0 0 1-.821 1.15M16 16H3a7 7 0 0 1 6.056-6.937M13 9h6.8M12 19v2m-4-2-1 2m9-2 1 2M3 3l18 18\"/>";
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
