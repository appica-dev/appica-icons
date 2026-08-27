<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 17h6m-6-5 3 4.5m0 0 3-4.5m-3 4.5V21M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h8M7 5v8a3 3 0 0 0 3 3h1m4-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
