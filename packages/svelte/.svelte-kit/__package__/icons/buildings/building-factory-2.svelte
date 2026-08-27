<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 21h18M5 21V9l5 4V9l5 4h4m0 0v8m0-8-1.436-9.574A.5.5 0 0 0 17.069 3h-1.145a.5.5 0 0 0-.494.418L14 12m-5 5h1m4 0h1\"/>";
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
