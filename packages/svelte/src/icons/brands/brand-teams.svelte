<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 10h4m-2 0v4m.104 3c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5-5V9m0 0h-5m5 0h4v5a4 4 0 0 1-4 4m-4.997-9.17a3 3 0 1 0-1.833-1.833m4.66 1.363a2.5 2.5 0 1 0 .594-4.117M3 7h10v10H3z\"/>";
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
