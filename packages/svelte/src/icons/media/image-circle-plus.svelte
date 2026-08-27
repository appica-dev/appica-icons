<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 8h.01m5.954 4.806a9 9 0 1 0-8.567 8.185M4 15l4-4c.928-.893 2.072-.893 3 0l4 4m-1-1 1-1c.928-.893 2.072-.893 3 0m-2 6.33h6m-3-3v6\"/>";
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
