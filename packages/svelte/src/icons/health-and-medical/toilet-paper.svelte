<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 10c0 1.857-.316 3.637-.879 4.95S6.796 17 6 17s-1.559-.738-2.121-2.05C3.316 13.637 3 11.857 3 10s.316-3.637.879-4.95C4.44 3.738 5.204 3 6 3m3 7c0-1.857-.316-3.637-.879-4.95C7.56 3.738 6.796 3 6 3m3 7v10l3-2 3 3 3-2 3 1V10c0-3.866-1.343-7-3-7H6m0 7h.01\"/>";
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
