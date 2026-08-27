<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 8h.01M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.845.349-1.608.91-2.153M3 16l5-5c.928-.893 2.072-.893 3 0l5 5m.33-3.662c.574-.054 1.155.166 1.67.662l3 3M3 3l18 18\"/>";
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
