<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.58 12c0 2.05.97 3.225-.04 5s-2.5 1.51-4.25 2.534C14.54 20.56 14.02 22 12 22s-2.538-1.441-4.29-2.466C5.96 18.51 4.47 18.775 3.46 17s-.04-2.95-.04-5-.97-3.225.04-5 2.5-1.51 4.25-2.534C9.46 3.44 9.98 2 12 2s2.54 1.441 4.29 2.466c1.75 1.024 3.24.759 4.25 2.534s.04 2.95.04 5\"/>";
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
