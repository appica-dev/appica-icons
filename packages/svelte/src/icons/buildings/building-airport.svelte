<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6 7-.78-2.342A.5.5 0 0 1 5.693 4h4.612a.5.5 0 0 1 .475.658L10 7M8 2v2m-2 8v9h4v-9m-7 9h18m1-16h-6l-1-1m3-1 2 2-2 2m-8 10h7a2 2 0 0 1 2 2v2M3.59 7h8.82a1 1 0 0 1 .902 1.433l-1.44 3a1 1 0 0 1-.901.567H5.029a1 1 0 0 1-.901-.567l-1.44-3A1 1 0 0 1 3.59 7\"/>";
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
