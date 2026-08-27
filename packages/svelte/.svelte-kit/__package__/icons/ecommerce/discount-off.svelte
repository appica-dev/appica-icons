<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9 15 3-3m2-2 1-1m-5.852.145A.498.498 0 0 0 9.5 10a.5.5 0 0 0 .35-.142m4.298 4.287A.498.498 0 0 0 14.5 15a.5.5 0 0 0 .35-.142M5.641 5.631A9 9 0 0 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18\"/>";
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
