<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3a3 3 0 0 0-3 3m0 0v12M9 6a3 3 0 0 0-3-3m3 15a3 3 0 0 0 3 3m-3-3a3 3 0 0 1-3 3m7-14h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7M5 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1m12-5h.01M13 12h.01\"/>";
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
