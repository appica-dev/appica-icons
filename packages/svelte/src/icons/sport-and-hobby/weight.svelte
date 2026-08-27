<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.924 6c0 .796.324 1.559.9 2.121.578.563 1.36.879 2.176.879s1.598-.316 2.175-.879A2.96 2.96 0 0 0 15.076 6c0-.796-.324-1.559-.9-2.121A3.12 3.12 0 0 0 12 3c-.816 0-1.598.316-2.175.879A2.96 2.96 0 0 0 8.924 6M6.704 9h10.592c.24 0 .473.082.657.232s.309.359.352.589l1.678 9a.98.98 0 0 1-.221.82 1.02 1.02 0 0 1-.788.359H5.026a1.05 1.05 0 0 1-.788-.36 1 1 0 0 1-.221-.819l1.678-9a1 1 0 0 1 .352-.589c.184-.15.417-.232.657-.232\"/>";
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
