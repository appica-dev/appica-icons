<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6c0 .796.843 1.559 2.343 2.121S9.878 9 12 9s4.157-.316 5.657-.879S20 6.796 20 6M4 6c0-.796.843-1.559 2.343-2.121S9.878 3 12 3s4.157.316 5.657.879S20 5.204 20 6M4 6v6m16-6v6M4 12c0 .796.843 1.559 2.343 2.121S9.878 15 12 15s4.157-.316 5.657-.879S20 12.796 20 12M4 12v6c0 .796.843 1.559 2.343 2.121S9.878 21 12 21s4.157-.316 5.657-.879S20 18.796 20 18v-6\"/>";
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
