<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6 15.752 3 2m3-1 8-11.995m-3 4.998 2 1M9 18.75a1.999 1.999 0 0 0 3.415 1.413 1.999 1.999 0 1 0-2.829-2.827A2 2 0 0 0 9 18.751m.592-14.299L12.9 6.555a1.3 1.3 0 0 1 .396 1.8L10.2 13.163a1.3 1.3 0 0 1-1.793.394l-3.306-2.103a1.3 1.3 0 0 1-.396-1.799L7.8 4.847a1.3 1.3 0 0 1 1.792-.395\"/>";
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
