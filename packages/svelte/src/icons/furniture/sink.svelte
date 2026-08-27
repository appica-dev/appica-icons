<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 9h3.039c.98 0 1.47 0 1.772.386s.199.789-.007 1.594C18.917 14.441 15.759 17 12 17s-6.917-2.559-7.804-6.02c-.206-.805-.309-1.207-.007-1.594S4.981 9 5.961 9H9m6 0h-3m3 0V7m-3 2H9m3 0V3.5a1.5 1.5 0 1 1 3 0M9 9V8c0-.943 0-1.414-.293-1.707S7.943 6 7 6m2 10.5l.642 3.532C9.849 21.172 10.842 22 12 22s2.151-.828 2.358-1.968L15 16.5\"/>";
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
