<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2.1 7.07Q5.21 17.15 12 10m0 0q0-6 4.07-7.06l.59-.11M12 10c7 3 4.35 8.51 4.35 8.51M12.182 2q2.91.033 5.818 1.08l.364.135A23 23 0 0 1 22 5q0 8.427-5.87 13.92-1.86 1.858-3.78 2.898L12 22q-2.1-1.054-4.13-3.079Q2.001 13.427 2 5q3.817-2.29 7.636-2.832L10 2.12q.905-.11 1.818-.12z\"/>";
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
