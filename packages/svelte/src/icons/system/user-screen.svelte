<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.03 17.818A3 3 0 0 0 21 15V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8c0 1.317.85 2.436 2.03 2.84M8 21a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m-6-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
