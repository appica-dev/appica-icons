<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-5 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m10-10a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-5 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
