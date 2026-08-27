<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 12h4.09c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H15m1-4h4m-4-5v10-9m3-1v1m0 8v1M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h8M7 5v8a3 3 0 0 0 3 3h1m4-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
